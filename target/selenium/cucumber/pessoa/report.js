$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("compararProbabilidade.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Comparar previsão do tempo.",
  "description": "",
  "id": "comparar-previsão-do-tempo.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@incluir"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Comparar probabilidade de chuva.",
  "description": "",
  "id": "comparar-previsão-do-tempo.;comparar-probabilidade-de-chuva.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou no site \"https://www.google.com.br\".",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "pesquiso a previsão do tempo de pato branco.",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "armazeno o valor da probabilidade para o site da google.",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "que estou no site de \"https://www.climatempo.com.br\".",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "pesquiso a previsão do tempo no climatempo para \"pato branco\".",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "armazeno o valor da probabilidade para o site do climatempo.",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "comparar os valores de probabilidade de chuva.",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.br",
      "offset": 19
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site(String)"
});
formatter.result({
  "duration": 41170761000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"nav-link-accountList\"]/span[1]\"}\n  (Session info: chrome\u003d80.0.3987.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DSK-TESCAC03\u0027, ip: \u002710.0.45.21\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.106, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\MAIKE~1.DIA\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:60860}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5121c3c958ec2e839b0617cc9ddd4f63\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"nav-link-accountList\"]/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.ManterPrevisaoTempoPageObjects.acessarPagina(ManterPrevisaoTempoPageObjects.java:41)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.PrevisaoTempoStepDefinitions.que_estou_no_site(PrevisaoTempoStepDefinitions.java:27)\r\n\tat ✽.Dado que estou no site \"https://www.google.com.br\".(compararProbabilidade.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_de_pato_branco(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_probabilidade_para_o_site_da_google()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.climatempo.com.br",
      "offset": 22
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pato branco",
      "offset": 49
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_no_climatempo_para(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_probabilidade_para_o_site_do_climatempo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.comparar_os_valores_de_probabilidade_de_chuva()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("compararUmidade.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Comparar previsão do tempo.",
  "description": "",
  "id": "comparar-previsão-do-tempo.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@incluir"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Comparar umidade do tempo.",
  "description": "",
  "id": "comparar-previsão-do-tempo.;comparar-umidade-do-tempo.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou no site \"https://www.google.com.br\".",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "pesquiso a previsão do tempo de pato branco.",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "armazeno o valor da umidade para o site da google.",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "que estou no site de \"https://www.climatempo.com.br\".",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "pesquiso a previsão do tempo no climatempo para \"pato branco\".",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "armazeno o valor da umidade para o site do climatempo.",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "comparar os valores de umidade de do tempo.",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.br",
      "offset": 19
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site(String)"
});
formatter.result({
  "duration": 27167500200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"nav-link-accountList\"]/span[1]\"}\n  (Session info: chrome\u003d80.0.3987.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DSK-TESCAC03\u0027, ip: \u002710.0.45.21\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.106, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\MAIKE~1.DIA\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:60911}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5fa54a545216181fe6d0cacce31eed39\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"nav-link-accountList\"]/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.ManterPrevisaoTempoPageObjects.acessarPagina(ManterPrevisaoTempoPageObjects.java:41)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.PrevisaoTempoStepDefinitions.que_estou_no_site(PrevisaoTempoStepDefinitions.java:27)\r\n\tat ✽.Dado que estou no site \"https://www.google.com.br\".(compararUmidade.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_de_pato_branco(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_umidade_para_o_site_da_google()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.climatempo.com.br",
      "offset": 22
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pato branco",
      "offset": 49
    }
  ],
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_no_climatempo_para(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_umidade_para_o_site_do_climatempo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.comparar_os_valores_de_umidade_de_do_tempo()"
});
formatter.result({
  "status": "skipped"
});
});