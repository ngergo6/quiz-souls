import { Validator } from "prop-types";

export type PropTypesValidator<Props> = {
    [K in keyof Props]: Validator<any>;
}