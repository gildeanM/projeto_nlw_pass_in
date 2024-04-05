import { prisma } from "../src/lib/prisma";


async function seed(){
    await prisma.event.create({
        data: {
            id: '1cb0eef7-393b-4ede-a25c-af5fdd8d6f88',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120

        }
    })
}

seed().then(()=>{
    console.log('Database seeded!')
    prisma.$disconnect()
})