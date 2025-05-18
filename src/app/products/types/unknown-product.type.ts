import { WomenGouns } from "../models/gouns-model";
import { MenJeans } from "../models/men-jeans.model";
import { MenKurta } from "../models/men-kurta-model";
import { Shoes } from "../models/shoes-model";
import { WomenKurta } from "../models/women-kurta-model";

export type UnknownProduct =
	| MenJeans
	| WomenGouns
	| WomenKurta
	| MenKurta
	| Shoes;