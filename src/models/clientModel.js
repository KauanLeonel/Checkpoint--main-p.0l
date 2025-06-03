import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const clientSchema = z.object({
  cpf: z.string({
    invalid_type_error: "O cpf deve ser uma string.",
    required_error: "O cpf é obrigatório."
  }),
  user_id: z.number({
    invalid_type_error: "O user_id deve ser um número.",
    required_error: "O user_id é obrigatório."
  })
})

export const clientValidator = (client, partial = null) => {
  if (partial) {
    return clientSchema.partial(partial).safeParse(client)
  }
  return clientSchema.safeParse(client)
}

export async function create(client) {
  const result = await prisma.client.create({
    data: {
      cpf: client.cpf,
      user: {
        connect: { id: client.user_id }
      }
    }
  })
  return result
}

export async function remove(id) {
  const result = await prisma.client.delete({
    where: { id }
  })
  return result
}

export async function getList() {
  const result = await prisma.client.findMany()
  return result
}

export async function update(id, client) {
  const result = await prisma.client.update({
    where: { id },
    data: client
  })
  return result
}
