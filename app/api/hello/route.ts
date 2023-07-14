// import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get("id")
  // if (!id) return redirect("https://nextjs.org/")
  // return NextResponse.json<{ id: string }>({ id: id || "N/A" })
}
export const revalidate = 60
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode("<p>One</p>")
  await sleep(200)
  yield encoder.encode("<p>Two</p>")
  await sleep(200)
  yield encoder.encode("<p>Three</p>")
}
