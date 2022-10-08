export class Store {
    _id: string;
    name: string;
    description: string;
    address: string;
    phoneNumber: string;
    posterURL: string

    constructor(store: { [key: string]: any }) {
        this._id = store._id
        this.name = store.name
        this.description = store.description
        this.address = store.address
        this.phoneNumber = store.phoneNumber
        this.posterURL = store.posterURL
    }
}
