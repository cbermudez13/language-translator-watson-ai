 /*{
    "apikey": "7DTkGycP1ao_MCgmZLtai1kf9pa9xM87F_4M-fDrbE3o",
    "iam_apikey_description": "Auto-generated for key 1e2acd8f-23fe-4bfa-bdcf-49ec121daf00",
    "iam_apikey_name": "Auto-generated service credentials",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/12f1d7c3dfce42aa853869d74839b0c3::serviceid:ServiceId-d45b102d-7aec-451b-a76d-0f992a37a40f",
    "url": "https://api.us-south.language-translator.watson.cloud.ibm.com/instances/ad130e18-14bf-4f8c-80b7-0d1774b2f3cc"
  } */

const express = require ('express');
const fs = require('fs')

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: '7DTkGycP1ao_MCgmZLtai1kf9pa9xM87F_4M-fDrbE3o',
  }),
  serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/ad130e18-14bf-4f8c-80b7-0d1774b2f3cc',
  disableSslVerification: true,
});

const translateDocumentParams = {
  file: fs.createReadStream('./Docs/resume.docx'),
  modelId: 'en-es',
  filename: 'resume.docx',
};

languageTranslator.translateDocument(translateDocumentParams)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  const getDocumentStatusParams = {
    documentId: 'aeee9ca1-fd2e-46a9-8cdc-7acf83462d64',
  };
  
  languageTranslator.getDocumentStatus(getDocumentStatusParams)
    .then(result => {
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });

  const getTranslatedDocumentParams = {
    documentId: 'aeee9ca1-fd2e-46a9-8cdc-7acf83462d64',
  };
  
  
  languageTranslator.getTranslatedDocument(getTranslatedDocumentParams)
    .then(response => {
      const outputFile = fs.createWriteStream('./Docs/translated-resume.docx');
      response.result.pipe(outputFile);
    })
    .catch(err => {
      console.log('error:', err);
    });
