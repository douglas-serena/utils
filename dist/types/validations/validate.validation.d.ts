import { OpUnitType } from "dayjs";
import { IPasswordOptionsDisabled, Typeof } from "./common";
import { IContainsOption } from "./common/contains.validation";
import { DateRange, DateAny, MaxMin } from "./date.validation";
import { BitSizesKeys } from "./file";
import { NumberRange } from "./number.validation";
export declare function validate(value: any): Validate;
export declare class Validate {
    value: any;
    constructor(value: any);
    contains: (pattern: string | RegExp, options?: IContainsOption) => boolean;
    testPattern: (pattern: string | RegExp) => boolean;
    isPassword: (disabled?: IPasswordOptionsDisabled, minLength?: number) => boolean;
    isTypeof: (type: Typeof) => boolean;
    isFalse: () => boolean;
    isTrue: () => boolean;
    isEqual: (compare: unknown) => boolean;
    isDifferent: (compare: unknown) => boolean;
    isEqualNotStrict: (compare: unknown) => boolean;
    isDifferentNotStrict: (compare: unknown) => boolean;
    isFill: <T = unknown>() => boolean;
    isEmpty: <T = unknown>() => boolean;
    isInstanceOf: (instance: unknown) => boolean;
    notIsInstanceOf: (instance: unknown) => boolean;
    isString: () => boolean;
    isObject: () => boolean;
    isFunction: () => boolean;
    isBoolean: () => boolean;
    isNull: () => boolean;
    isUndefined: () => boolean;
    isCnpj: () => boolean;
    isCpf: () => boolean;
    isCpfOrCnpj: () => boolean;
    isFile: () => boolean;
    maxHeightFile: (max: number) => Promise<boolean>;
    minHeightFile: (min: number) => Promise<boolean>;
    maxWidthFile: (max: number) => Promise<boolean>;
    minWidthFile: (min: number) => Promise<boolean>;
    maxSizeFile: (max: number, type?: BitSizesKeys) => boolean;
    minSizeFile: (min: number, type?: BitSizesKeys) => boolean;
    isAllowExtensionsFile: (extensions: string[]) => boolean;
    isNumeric: () => boolean;
    isNumber: () => boolean;
    isFloat: () => boolean;
    isEqualNumber: (compare: number) => boolean;
    isDifferentNumber: (compare: number) => boolean;
    isBeforeNumber: (range: NumberRange) => boolean;
    isLessOrEqual: (value: number) => boolean;
    isLess: (value: number) => boolean;
    isMore: (value: number) => boolean;
    isMoreOrEqual: (value: number) => boolean;
    isDate: () => boolean;
    isAfterDate: (date: DateAny, options?: OpUnitType) => boolean;
    isBeforeDate: (date: DateAny, options?: OpUnitType) => boolean;
    isBetweenDate: (range: DateRange, options?: OpUnitType, d?: "()" | "[]" | "[)" | "(]") => boolean;
    isBirthDateValidation: (year?: MaxMin) => boolean;
    isEqualDate: (date: DateAny, options?: OpUnitType) => boolean;
    isDifferentDate: (date: DateAny, options?: OpUnitType) => boolean;
}
