import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Card } from '../components/card';
import { Navbar } from "../components/navbar";
import { Store } from '../models/store';

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const stores: Store[] = props.stores.map((store: { [key: string]: any }) => new Store(store))
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {stores.map(store => <Card
            key={store._id}
            imageURL={store.posterURL}
            title={store.name}
            subTitle={store.description} />
        )}
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const baseURL = "http://localhost:3000"
    const paginatedStore: ServerSideProps = await (await fetch(`${baseURL}/stores`)).json()

    return {
        props: { stores: paginatedStore.stores }
    }
}

interface ServerSideProps {
    stores: Store[]
    next?: string
}

export default Home
