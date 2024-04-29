export class PaginationModel {
    constructor(
     public PageSize: number,
     public CurrentPage: number,
     public Search: string,
    ) {
        this.PageSize = PageSize < 1 ? 10 : PageSize,
        this.CurrentPage = CurrentPage < 1 ? 1 : CurrentPage,
        this.Search = Search
    }
}