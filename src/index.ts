import { getBankDatas } from "./apis/data-verification/bankDetails";
import { Base } from "./base";
import { applyMixins } from "./utils";

class PremblySdk extends Base {}
interface PremblySdk extends getBankDatas {}

applyMixins(PremblySdk, [getBankDatas]);

export default PremblySdk;
