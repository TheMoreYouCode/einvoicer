import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_ContactFunctionCode_D16A.xsd

export type ContactFunctionCodeContentType =
	| "AA"
	| "AB"
	| "AC"
	| "AD"
	| "AE"
	| "AF"
	| "AG"
	| "AH"
	| "AI"
	| "AJ"
	| "AK"
	| "AL"
	| "AM"
	| "AN"
	| "AO"
	| "AP"
	| "AQ"
	| "AR"
	| "AS"
	| "AT"
	| "AU"
	| "AV"
	| "AW"
	| "AX"
	| "AY"
	| "AZ"
	| "BA"
	| "BB"
	| "BC"
	| "BD"
	| "BE"
	| "BF"
	| "BG"
	| "BH"
	| "BI"
	| "BJ"
	| "BK"
	| "BL"
	| "BM"
	| "BN"
	| "BO"
	| "BP"
	| "BQ"
	| "BR"
	| "BU"
	| "CA"
	| "CB"
	| "CC"
	| "CD"
	| "CE"
	| "CF"
	| "CG"
	| "CN"
	| "CO"
	| "CP"
	| "CR"
	| "CW"
	| "DE"
	| "DI"
	| "DL"
	| "EB"
	| "EC"
	| "ED"
	| "EX"
	| "GR"
	| "HE"
	| "HG"
	| "HM"
	| "IC"
	| "IN"
	| "LB"
	| "LO"
	| "MC"
	| "MD"
	| "MH"
	| "MR"
	| "MS"
	| "NT"
	| "OC"
	| "PA"
	| "PD"
	| "PE"
	| "PM"
	| "QA"
	| "QC"
	| "RD"
	| "RP"
	| "SA"
	| "SC"
	| "SD"
	| "SR"
	| "SU"
	| "TA"
	| "TD"
	| "TI"
	| "TR"
	| "WH"
	| "WI"
	| "WJ"
	| "WK"
	| "ZZZ";
interface _ContactFunctionCodeContentType extends Primitive._string {
	content: ContactFunctionCodeContentType;
}

export interface document {}