import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
    
    
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const categories: Category[] = [
            { id: 1, name: "Maradia", description: "Pagamento de contas da casa"},
            { id: 2, name: "Saúde", description: "Plano de saúde e remédios"},
            { id: 3, name: "Lazer", description: "Cinema, parques, praias, etc"},
            { id: 4, name: "Salário", description: "Recebimento de salário"},
            { id: 5, name: "Freels", description: "Trabalhos como Freelancer"}
        ]

        return { categories };
    }

}