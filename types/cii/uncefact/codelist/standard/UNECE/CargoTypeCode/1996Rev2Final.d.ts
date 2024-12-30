import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_CargoTypeCode_1996Rev2Final.xsd

export type CargoTypeCodeContentType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "9";
interface _CargoTypeCodeContentType extends Primitive._string {
	content: CargoTypeCodeContentType;
}

export interface document {}