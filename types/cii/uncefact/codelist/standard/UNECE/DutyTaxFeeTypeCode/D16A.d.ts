import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_DutyTaxFeeTypeCode_D16A.xsd

export type DutyTaxFeeTypeCodeContentType =
	| "AAA"
	| "AAB"
	| "AAC"
	| "AAD"
	| "AAE"
	| "AAF"
	| "AAG"
	| "AAH"
	| "AAI"
	| "AAJ"
	| "AAK"
	| "AAL"
	| "AAM"
	| "ADD"
	| "BOL"
	| "CAP"
	| "CAR"
	| "COC"
	| "CST"
	| "CUD"
	| "CVD"
	| "ENV"
	| "EXC"
	| "EXP"
	| "FET"
	| "FRE"
	| "GCN"
	| "GST"
	| "ILL"
	| "IMP"
	| "IND"
	| "LAC"
	| "LCN"
	| "LDP"
	| "LOC"
	| "LST"
	| "MCA"
	| "MCD"
	| "OTH"
	| "PDB"
	| "PDC"
	| "PRF"
	| "SCN"
	| "SSS"
	| "STT"
	| "SUP"
	| "SUR"
	| "SWT"
	| "TAC"
	| "TOT"
	| "TOX"
	| "TTA"
	| "VAD"
	| "VAT";
interface _DutyTaxFeeTypeCodeContentType extends Primitive._string {
	content: DutyTaxFeeTypeCodeContentType;
}

export interface document {}
