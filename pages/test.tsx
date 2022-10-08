import { NextPage, InferGetServerSidePropsType } from "next"
import { getServerSideProps } from "."
import { Card } from "../components/card"
import { Store } from "../models/store"

const Test: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // const stores: Store[] = props.stores.map((store: { [key: string]: any }) => new Store(store))
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        <p>hehehe</p>
    </div>
}

export default Test