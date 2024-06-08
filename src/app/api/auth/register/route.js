const { NextResponse } = require("next/server");
import { prisma } from '@/libs/prisma';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  const id = uuidv4();

  try {
    let {
      // Personal Information:
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      fecha_naci,
      telefono,
      desc_personal,
      // User information:

    } = await request.json();

    console.log('Estoy llegando al backend', {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      fecha_naci,
      telefono,
      desc_personal,
    });

    fecha_naci = (new Date(fecha_naci)).toISOString();

    const newPerson = await prisma.personas.create({
      data: {
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        fecha_naci,
        telefono,
        desc_personal,
        id_persona: id,
        id_genero: 1,
      },
    });

   //  const newUser = await prisma.usuarios.create({
   //    data: {

   //    }
   //  })

    return new NextResponse(JSON.stringify(newPerson ), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
    });
  }
}