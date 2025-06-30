import { Schema, Document, model, Types } from 'mongoose'

abstract class person {
    constructor(protected name: string) {}
}



