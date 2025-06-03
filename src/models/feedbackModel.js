import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient();

const feedbackSchema = z.object({
    comment: z.string({
        invalid_type_error: "O comentário deve ser uma string.",
        required_error: "O comentário é obrigatório."
    }).max(255, { message: "O comentário deve ter no máximo 255 caracteres." }),

    user_id: z.number({
        required_error: "O ID do usuário é obrigatório."
      }),

    stars_avaliation: z.number({
        required_error: "As estrelas são obrigatórias."
    }).int() // <- Aqui está a correção
});


export const feedbackValidator = (feedback, partial = null) => {
    if (partial) {
        return feedbackSchema.partial(partial).safeParse(feedback)
    }
    return feedbackSchema.safeParse(feedback)
}

export async function create(feedback) {
    const validation = feedbackValidator(feedback);
  
    if (!validation.success) {
      throw new Error('Feedback inválido: ' + JSON.stringify(validation.error.flatten().fieldErrors));
    }
  
    const result = await prisma.feedback.create({
      data: {
        comment: feedback.comment,
        stars_avaliation: feedback.stars_avaliation,
        user: {
          connect: { id: feedback.user_id }
        }
      }
    });
  
    return result;
  }
  
  
  

export async function remove(id) {
    const result = await prisma.feedback.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList() {
    const result = await prisma.feedback.findMany()
    return result
}

export async function update(id, feedback) {
    const result = await prisma.feedback.update({
        where: {
            id
        },
        data: feedback
    })
    return result
}