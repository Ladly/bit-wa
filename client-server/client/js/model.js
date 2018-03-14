import { SomeKindOfEntity } from "./entities/something.js"

export const createStrangeEntity = ({title, intro}) => {
    return new SomeKindOfEntity(title, intro)
}

