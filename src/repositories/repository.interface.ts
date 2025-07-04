

/**
 * generic repository interface for perfoming basic data operations
 */

interface IRepository<T>{
    create(item: Partial<T>): Promise <T>;
    update(id: string, item: Partial<T>): Promise <T>;
    delete(id: string): Promise <boolean>;
    findOne(id: string): Promise <T>;
    findAll(): Promise <T[]>
}

export default IRepository