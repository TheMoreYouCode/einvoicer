import * as Primitive from "../../../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/ConnectingEurope/eInvoicing-EN16931/refs/heads/master/cii/schema/D16B%20SCRDM%20(Subset)/coupled%20clm/CII/uncefact/codelist/standard/UNECE_PackageTypeCode_2006.xsd

export type PackageTypeCodeContentType =
	| "43"
	| "44"
	| "1A"
	| "1B"
	| "1D"
	| "1F"
	| "1G"
	| "1W"
	| "2C"
	| "3A"
	| "3H"
	| "4A"
	| "4B"
	| "4C"
	| "4D"
	| "4F"
	| "4G"
	| "4H"
	| "5H"
	| "5L"
	| "5M"
	| "6H"
	| "6P"
	| "7A"
	| "7B"
	| "8A"
	| "8B"
	| "8C"
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
	| "AL"
	| "AM"
	| "AP"
	| "AT"
	| "AV"
	| "B4"
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
	| "BS"
	| "BT"
	| "BU"
	| "BV"
	| "BW"
	| "BX"
	| "BY"
	| "BZ"
	| "CA"
	| "CB"
	| "CC"
	| "CD"
	| "CE"
	| "CF"
	| "CG"
	| "CH"
	| "CI"
	| "CJ"
	| "CK"
	| "CL"
	| "CM"
	| "CN"
	| "CO"
	| "CP"
	| "CQ"
	| "CR"
	| "CS"
	| "CT"
	| "CU"
	| "CV"
	| "CW"
	| "CX"
	| "CY"
	| "CZ"
	| "DA"
	| "DB"
	| "DC"
	| "DG"
	| "DH"
	| "DI"
	| "DJ"
	| "DK"
	| "DL"
	| "DM"
	| "DN"
	| "DP"
	| "DR"
	| "DS"
	| "DT"
	| "DU"
	| "DV"
	| "DW"
	| "DX"
	| "DY"
	| "EC"
	| "ED"
	| "EE"
	| "EF"
	| "EG"
	| "EH"
	| "EI"
	| "EN"
	| "FB"
	| "FC"
	| "FD"
	| "FE"
	| "FI"
	| "FL"
	| "FO"
	| "FP"
	| "FR"
	| "FT"
	| "FW"
	| "FX"
	| "GB"
	| "GI"
	| "GL"
	| "GR"
	| "GU"
	| "GY"
	| "GZ"
	| "HA"
	| "HB"
	| "HC"
	| "HG"
	| "HN"
	| "HR"
	| "IA"
	| "IB"
	| "IC"
	| "ID"
	| "IE"
	| "IF"
	| "IG"
	| "IH"
	| "IK"
	| "IL"
	| "IN"
	| "IZ"
	| "JB"
	| "JC"
	| "JG"
	| "JR"
	| "JT"
	| "JY"
	| "KG"
	| "KI"
	| "LE"
	| "LG"
	| "LT"
	| "LU"
	| "LV"
	| "LZ"
	| "MA"
	| "MB"
	| "MC"
	| "ME"
	| "MR"
	| "MS"
	| "MT"
	| "MW"
	| "MX"
	| "NA"
	| "NE"
	| "NF"
	| "NG"
	| "NS"
	| "NT"
	| "NU"
	| "NV"
	| "OA"
	| "OB"
	| "OC"
	| "OD"
	| "OE"
	| "OF"
	| "OK"
	| "OT"
	| "OU"
	| "P2"
	| "PA"
	| "PB"
	| "PC"
	| "PD"
	| "PE"
	| "PF"
	| "PG"
	| "PH"
	| "PI"
	| "PJ"
	| "PK"
	| "PL"
	| "PN"
	| "PO"
	| "PP"
	| "PR"
	| "PT"
	| "PU"
	| "PV"
	| "PX"
	| "PY"
	| "PZ"
	| "QA"
	| "QB"
	| "QC"
	| "QD"
	| "QF"
	| "QG"
	| "QH"
	| "QJ"
	| "QK"
	| "QL"
	| "QM"
	| "QN"
	| "QP"
	| "QQ"
	| "QR"
	| "QS"
	| "RD"
	| "RG"
	| "RJ"
	| "RK"
	| "RL"
	| "RO"
	| "RT"
	| "RZ"
	| "SA"
	| "SB"
	| "SC"
	| "SD"
	| "SE"
	| "SH"
	| "SI"
	| "SK"
	| "SL"
	| "SM"
	| "SO"
	| "SP"
	| "SS"
	| "ST"
	| "SU"
	| "SV"
	| "SW"
	| "SY"
	| "SZ"
	| "T1"
	| "TB"
	| "TC"
	| "TD"
	| "TE"
	| "TG"
	| "TI"
	| "TK"
	| "TL"
	| "TN"
	| "TO"
	| "TR"
	| "TS"
	| "TT"
	| "TU"
	| "TV"
	| "TW"
	| "TY"
	| "TZ"
	| "UC"
	| "UN"
	| "VA"
	| "VG"
	| "VI"
	| "VK"
	| "VL"
	| "VN"
	| "VO"
	| "VP"
	| "VQ"
	| "VR"
	| "VS"
	| "VY"
	| "WA"
	| "WB"
	| "WC"
	| "WD"
	| "WF"
	| "WG"
	| "WH"
	| "WJ"
	| "WK"
	| "WL"
	| "WM"
	| "WN"
	| "WP"
	| "WQ"
	| "WR"
	| "WS"
	| "WT"
	| "WU"
	| "WV"
	| "WW"
	| "WX"
	| "WY"
	| "WZ"
	| "XA"
	| "XB"
	| "XC"
	| "XD"
	| "XF"
	| "XG"
	| "XH"
	| "XJ"
	| "XK"
	| "YA"
	| "YB"
	| "YC"
	| "YD"
	| "YF"
	| "YG"
	| "YH"
	| "YJ"
	| "YK"
	| "YL"
	| "YM"
	| "YN"
	| "YP"
	| "YQ"
	| "YR"
	| "YS"
	| "YT"
	| "YV"
	| "YW"
	| "YX"
	| "YY"
	| "YZ"
	| "ZA"
	| "ZB"
	| "ZC"
	| "ZD"
	| "ZF"
	| "ZG"
	| "ZH"
	| "ZJ"
	| "ZK"
	| "ZL"
	| "ZM"
	| "ZN"
	| "ZP"
	| "ZQ"
	| "ZR"
	| "ZS"
	| "ZT"
	| "ZU"
	| "ZV"
	| "ZW"
	| "ZX"
	| "ZY"
	| "ZZ";
interface _PackageTypeCodeContentType extends Primitive._string {
	content: PackageTypeCodeContentType;
}

export interface document {}
