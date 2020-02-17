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
  "name": "que estou no site da google.",
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
  "name": "que estou no site do climatempo.",
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
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_da_google()"
});
formatter.result({
  "duration": 14766658300,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_de_pato_branco()"
});
formatter.result({
  "duration": 3718092800,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_probabilidade_para_o_site_da_google()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_do_climatempo()"
});
formatter.result({
  "duration": 6262000900,
  "status": "passed"
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
  "duration": 31704835200,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:31922\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DSK-TESCAC03\u0027, ip: \u002710.0.45.21\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.ManterPrevisaoTempoPageObjects.preencheBarraPesquisaClimaTempo(ManterPrevisaoTempoPageObjects.java:112)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_no_climatempo_para(PrevisaoTempoStepDefinitions.java:47)\r\n\tat ✽.E pesquiso a previsão do tempo no climatempo para \"pato branco\".(compararProbabilidade.feature:12)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:31922\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.ManterPrevisaoTempoPageObjects.preencheBarraPesquisaClimaTempo(ManterPrevisaoTempoPageObjects.java:112)\r\n\tat br.com.desafio.cadastro.previsaotempo.incluir.PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_no_climatempo_para(PrevisaoTempoStepDefinitions.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 65 more\r\n",
  "status": "failed"
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
  "name": "que estou no site da google.",
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
  "name": "que estou no site do climatempo.",
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
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_da_google()"
});
formatter.result({
  "duration": 12767304500,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.pesquiso_a_previsão_do_tempo_de_pato_branco()"
});
formatter.result({
  "duration": 2641953400,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_umidade_para_o_site_da_google()"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.que_estou_no_site_do_climatempo()"
});
formatter.result({
  "duration": 4575405900,
  "status": "passed"
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
  "duration": 4973732700,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.armazeno_o_valor_da_umidade_para_o_site_do_climatempo()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "PrevisaoTempoStepDefinitions.comparar_os_valores_de_umidade_de_do_tempo()"
});
formatter.result({
  "duration": 165600,
  "status": "passed"
});
});