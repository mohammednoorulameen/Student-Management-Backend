

/**
 * generic repository interface for perfoming basic data operations
 */
interface IRepository<T>{
    create(item: Partial<T>): Promise <T>;
}

export default IRepository