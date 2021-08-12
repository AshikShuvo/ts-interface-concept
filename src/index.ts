import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";
const user=new User();
const company=new Company();
const map=new CustomMap();

map.putMarker(user);
map.putMarker(company)