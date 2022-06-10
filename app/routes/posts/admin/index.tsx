import { Link } from "@remix-run/react"
import type { LoaderFunction } from "@remix-run/node"
import {json} from '@remix-run/node'
import { requiredAdiminUser } from "~/session.server"

export const loader: LoaderFunction = async ({ request }) => {
  await requiredAdiminUser(request)
  return json({})
}

export default function AdminIndexRoute() {
  return (
    <p>
      <Link to='new' className='text-blue-600 underline'>
        Create new Post
      </Link>
    </p>
  )
}