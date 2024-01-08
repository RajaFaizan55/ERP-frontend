export const columns = [
  { key: 'degree', name: 'Degree', alignText: 'left', width: '150px' },
  { key: 'institute', name: 'Institute', alignText: 'left', width: '250px' },
  { key: 'startDate', name: 'Start Date', alignText: 'center', width: '150px' },
  { key: 'endDate', name: 'End Date', alignText: 'center', width: '150px' },
  {
    key: 'percentageCgpa',
    name: 'Percentage/CGPA',
    alignText: 'center',
    width: '180px',
  },
  { key: 'actions', name: 'Actions', alignText: 'center', width: '150px' },
];

export const backendResponse = (obj: any) => {
  const tempObj = { ...obj };

  const newObj = {
    currentAddress: {
      city: tempObj.currentCity,
      postalCode: tempObj.currentCode,
      state: tempObj.currentState,
      country: tempObj.currentCountry,
      address: tempObj.currentAddress,
    },
    permanentAddress: {
      city: tempObj.permanentCity,
      postalCode: tempObj.permanentCode,
      state: tempObj.permanentState,
      country: tempObj.permanentCountry,
      address: tempObj.permanentAddress,
    },
  };
  return newObj;
};

export const convertFrontendResponse = (obj: any) => {
  const tempObj = { ...obj };

  const temp = {
    currentAddress: tempObj.currentAddress.address,
    currentCity: tempObj.currentAddress.city,
    currentCode: tempObj.currentAddress.postalCode,
    currentCountry: tempObj.currentAddress.country,
    currentState: tempObj.currentAddress.state,
    permanentAddress: tempObj.permanentAddress.address,
    permanentCity: tempObj.permanentAddress.city,
    permanentCode: tempObj.permanentAddress.postalCode,
    permanentCountry: tempObj.permanentAddress.country,
    permanentState: tempObj.permanentAddress.state,
  };
  return temp;
};

export const banksData = [
  'ALBARAKA BANK (PAKISTAN)LIMITED',
  'ALFALAH SECURITIES (PRIVATE) LIMITED',
  'ALI HUSSAIN RAJABALI (BROKERS)',
  'ALLIED BANK LIMITED',
  'AMERICAN EXPRESS BANK LTD.',
  'AQEEL KARIM DHEDHI (BROKERS)',
  'ARIF HABIB LIMITED',
  'ASKARI BANK LIMITED',
  'ASKARIBANK LIMITED',
  'AZIZ FIDA HUSSAIN (BROKERS)',
  'B. SALEEM GAZIPURA (BROKERS)',
  'BANK AL HABIB LIMITED',
  'BANK ALFALAH LIMITED',
  'BANK OF CHINA LIMITED KARACHI BRANCH',
  'BANK OF KHYBER, THE',
  'BANK OF PUNJAB, THE',
  'BANK OF TOKYO-MITSUBISHI UFJ, LTD., THE',
  'BANKISLAMI PAKISTAN LIMITED',
  'BHAYANI SECURITIES (PVT) LTD.',
  'BMA CAPITAL MANAGEMENT LIMITED',
  'CENTRAL DEPOSITORY COMPANY OF PAKISTAN LIMITED',
  'CITIBANK N.A.',
  'DEUTSCHE BANK AG, ISLAMABAD BRANCH',
  'DEUTSCHE BANK AG, KARACHI BRANCH',
  'DEUTSCHE BANK AG, LAHORE BRANCH',
  'DUBAI ISLAMIC BANK PAKISTAN LIMITED',
  'EFG HERMES PAKISTAN LIMITED',
  'ELIXIR SECURITIES PAKISTAN (PVT) LTD',
  'FAISAL ISLAMIC BANK OF BAHRAIN',
  'FAYSAL BANK LIMITED',
  'FIRST CAPITAL EQUITIES LIMITED',
  'FIRST WOMEN BANK LIMITED',
  'HABIB BANK LIMITED',
  'HABIB METROPOLITAN BANK LIMITED',
  'HSBC BANK OMAN S.A.O.G. (FORMERLY OMAN INTERNATIONAL BANK)',
  'I. PURI SECURITIES (PVT) LIMITED',
  'IFIC BANK LTD',
  'IGI FINEX SECURITIES',
  'INDUSTRIAL AND COMMERCIAL BANK OF CHINA, KARACHI BRANCH',
  'INSIGHT SECURITIES (PRIVATE) LTD',
  'INTERMARKET SECURITIES LIMITED',
  'INVISOR SECURITIES (PVT) LIMITED',
  'JARDINE FLEMING PAKISTAN LTD.',
  'JEHANGIR SIDDIQUI AND CO . LIMITED',
  'JS BANK LIMITED',
  'JS GLOBAL CAPITAL LTD.',
  'KARACHI STOCK EXCHANGE (GUARANTEE) LIMITED, THE',
  'KHADIM ALI SHAH BUKHARI AND CO. LTD',
  'MAJEED ADAM',
  'MCB BANK LIMITED',
  'MCB ISLAMIC BANK LIMITED',
  'MEEZAN BANK LIMITED',
  'NATIONAL BANK OF PAKISTAN',
  'NEXT CAPITAL LIMITED',
  'OPTIMUS CAPITAL MANAGEMENT (PVT) LTD',
  'PAKISTAN KUWAIT INVESTMENT COMPANY PRIVATE LIMITED',
  'PAKISTAN TOBACCO COMPANY LIMITED',
  'PAKLIBYA HOLDING COMPANY (PRIVATE) LIMITED',
  'ROYAL EXCHANGE LTD',
  'RUPALI BANK LIMITED',
  'SAMBA BANK LIMITED',
  'SILK FINANCE',
  'SILKBANK LIMITED',
  'SINDH BANK LIMITED',
  'SME BANK LTD',
  'SOCIETE GENERALE, THE FRENCH AND INTERNATIONAL BANK',
  'SONERI BANK LIMITED',
  'STANDARD CHARTERED BANK (PAKISTAN) LIMITED',
  'STATE BANK OF PAKISTAN',
  'SULTAN GHULAM HUSEIN DATTOO (BROKERS)',
  'SUMMIT BANK LTD',
  'TAURUS SECURITIES LIMITED',
  'THE ROYAL BANK OF SCOTLAND LIMITED',
  'TOPLINE SECURITIES PVT LTD.',
  'TRUST BANK LIMITED',
  'TRUST INVESTMENT BANK LIMITED',
  'UNITED BANK LIMITED',
  'WALL STREET EXCHANGE COMPANY (PVT) LTD.',
];
