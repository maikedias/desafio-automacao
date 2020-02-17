$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastrarEndereçoComSucesso.feature");
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
  "name": "Cadastrar endereço no site da amazon.",
  "description": "",
  "id": "cadastrar-endereço-no-site-da-amazon.",
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
  "name": "Cadastrar endereço no site da amazon com sucesso.",
  "description": "",
  "id": "cadastrar-endereço-no-site-da-amazon.;cadastrar-endereço-no-site-da-amazon-com-sucesso.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que possuo um usuário cadastrado no site da amazon.",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que estou na tela de login do site da amazon.",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informar email cadastrado.",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar em continuar.",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "informar senha do usuário cadastrado.",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar em fazer login.",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "deve ser logado.",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "na tela de minha conta.",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar em endereços.",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar em adicionar endereço.",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informar nome \"Teste Automatizado\".",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "informar telefone \"46991300094\".",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informar cep \"85813100\".",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clicar em validar CEP.",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "informar número \"342\".",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clicar salvar endereço.",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "deve ser salvo endereço.",
  "keyword": "Então "
});
formatter.match({
  "location": "AmazonStepDefinitions.que_possuo_um_usuário_cadastrado_no_site_da_amazon()"
});
formatter.result({
  "duration": 126128500,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\agrorevenda-automacao-cadastro\\src\\test\\resources\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat br.com.desafio.cadastro.amazon.incluir.ManterAmazonPageObjects.\u003cinit\u003e(ManterAmazonPageObjects.java:37)\r\n\tat br.com.desafio.cadastro.amazon.incluir.AmazonStepDefinitions.\u003cinit\u003e(AmazonStepDefinitions.java:11)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Dado que possuo um usuário cadastrado no site da amazon.(cadastrarEndereçoComSucesso.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDefinitions.que_estou_na_tela_de_login_do_site_da_amazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_email_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_continuar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_senha_do_usuário_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_fazer_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.deve_ser_logado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.na_tela_de_minha_conta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_endereços()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_adicionar_endereço()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Automatizado",
      "offset": 15
    }
  ],
  "location": "AmazonStepDefinitions.informar_nome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "46991300094",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinitions.informar_telefone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "85813100",
      "offset": 14
    }
  ],
  "location": "AmazonStepDefinitions.informar_cep(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_validar_CEP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "342",
      "offset": 17
    }
  ],
  "location": "AmazonStepDefinitions.informar_número(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_salvar_endereço()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.deve_ser_salvo_endereço()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loginComFalha.feature");
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
  "name": "Logar no site da amazon.",
  "description": "",
  "id": "logar-no-site-da-amazon.",
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
  "name": "Logar no site da amazon com falha.",
  "description": "",
  "id": "logar-no-site-da-amazon.;logar-no-site-da-amazon-com-falha.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que possuo um usuário cadastrado no site da amazon.",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que estou na tela de login do site da amazon.",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informar email cadastrado.",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar em continuar.",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "informar senha incorreta do usuário cadastrado.",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar em fazer login.",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "deve exibir mensagem que senha está incorreta.",
  "keyword": "Então "
});
formatter.match({
  "location": "AmazonStepDefinitions.que_possuo_um_usuário_cadastrado_no_site_da_amazon()"
});
formatter.result({
  "duration": 2306600,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\agrorevenda-automacao-cadastro\\src\\test\\resources\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat br.com.desafio.cadastro.amazon.incluir.ManterAmazonPageObjects.\u003cinit\u003e(ManterAmazonPageObjects.java:37)\r\n\tat br.com.desafio.cadastro.amazon.incluir.AmazonStepDefinitions.\u003cinit\u003e(AmazonStepDefinitions.java:11)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Dado que possuo um usuário cadastrado no site da amazon.(loginComFalha.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDefinitions.que_estou_na_tela_de_login_do_site_da_amazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_email_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_continuar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_senha_incorreta_do_usuário_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_fazer_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.deve_exibir_mensagem_que_senha_está_incorreta()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loginComSucesso.feature");
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
  "name": "Logar no site da amazon.",
  "description": "",
  "id": "logar-no-site-da-amazon.",
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
  "name": "Logar no site da amazon com sucesso.",
  "description": "",
  "id": "logar-no-site-da-amazon.;logar-no-site-da-amazon-com-sucesso.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que possuo um usuário cadastrado no site da amazon.",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que estou na tela de login do site da amazon.",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informar email cadastrado.",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar em continuar.",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "informar senha do usuário cadastrado.",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar em fazer login.",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "deve ser logado.",
  "keyword": "Então "
});
formatter.match({
  "location": "AmazonStepDefinitions.que_possuo_um_usuário_cadastrado_no_site_da_amazon()"
});
formatter.result({
  "duration": 2623500,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\agrorevenda-automacao-cadastro\\src\\test\\resources\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat br.com.desafio.cadastro.amazon.incluir.ManterAmazonPageObjects.\u003cinit\u003e(ManterAmazonPageObjects.java:37)\r\n\tat br.com.desafio.cadastro.amazon.incluir.AmazonStepDefinitions.\u003cinit\u003e(AmazonStepDefinitions.java:11)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Dado que possuo um usuário cadastrado no site da amazon.(loginComSucesso.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AmazonStepDefinitions.que_estou_na_tela_de_login_do_site_da_amazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_email_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_continuar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.informar_senha_do_usuário_cadastrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.clicar_em_fazer_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonStepDefinitions.deve_ser_logado()"
});
formatter.result({
  "status": "skipped"
});
});