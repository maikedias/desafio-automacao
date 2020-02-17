package br.com.desafio.cadastro.amazon.incluir;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ManterAmazonPageObjects {
	private static final int DEFAULT_SLEEP_TIMEOUT = 30;
	private static WebDriver driver;
	private static WebDriverWait wait;
	private static final By loginEmail = By.xpath(".//*[@id='ap_email']");
	private static final By btnContinue = By.xpath(".//*[@id='continue']");
	private static final By senha = By.xpath(".//*[@id='ap_password']");	
	private static final By	btnLogar = By.xpath (".//*[@id='signInSubmit']");
	private static final By btnConta = By.xpath(".//*[@id='nav-link-accountList']//*[@class='nav-line-1']");
	private static final By endereco = By.xpath(".//*[@data-card-identifier='AddressesAnd1Click']");
	private static final By adicionarEndereco = By.xpath(".//*[@id='ya-myab-plus-address-icon']");
	private static final By nomeCompleto = By.xpath("//*[@id='address-ui-widgets-enterAddressFullName']");
    private static final By telefone = By.xpath("//*[@id='address-ui-widgets-enterAddressPhoneNumber']");
	private static final By cep = By.xpath("//*[@id='address-ui-widgets-enterAddressPostalCode']");
    private static final By btnValidarCep = By.xpath("//*[@name='address-ui-widgets-enterAddressPostalCode-submit']");
    private static final By	numero = By.xpath(".//*[@name='address-ui-widgets-buildingNumber']");
    private static final By btnSalvarEndereco = By.xpath(".//*[@id='a-autoid-0']/span/input");
    private static final By verificarMensagemSalvo = By.xpath(".//*[@class='a-alert-heading']");
    private static final By verificarSenhaIncorreta = By.xpath(".//*[@class='a-list-item']");   
    private static final By verificarLogou = By.xpath("//*[@id='nav-link-accountList']//*[@class='nav-line-1']");
  
    
    public ManterAmazonPageObjects() {
       System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");
       ChromeOptions options = new ChromeOptions();
	   options.addArguments( "disable-infobars" );
       options.addArguments( "start-maximized" );
       options.addArguments( "--incognito" );
 	   driver = new ChromeDriver(options);
       wait = new WebDriverWait( driver, DEFAULT_SLEEP_TIMEOUT );
    }
    
    public void delay( int tempo ) {
        try {
            Thread.sleep( tempo );
        } catch ( Exception e ) {
            e.printStackTrace();
        }
    }
    
    public void acessarPaginaAmazon() {
   
 	       driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
     	   driver.manage().window().maximize();
 	       driver.get( "https://amazon.com.br/" );
     	   driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]/span[1]")).click();
    }

    public void preencheLoginEmail(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(loginEmail ));
    	driver.findElement( loginEmail ).sendKeys(dado);
    	}
    
    public void clicaBtnContinue() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnContinue ) );
    	driver.findElement( btnContinue ).click();
    	}
    
    public void preencheSenha(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(senha ));
    	driver.findElement( senha ).sendKeys(dado);
    	}
    
    public void clicaBtnLogar() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnLogar ) );
    	driver.findElement( btnLogar ).click();
    	}

    public void clicaBtnConta() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnConta ) );
    	driver.findElement( btnConta ).click();
    	}
    
    
    public void clicaBtnEndereco() {
    	wait.until( ExpectedConditions.elementToBeClickable( endereco ) );
    	driver.findElement( endereco ).click();
    	}
    
    public void clicaBtnAdicionarEndereco() {
    	wait.until( ExpectedConditions.elementToBeClickable( adicionarEndereco ) );
    	driver.findElement( adicionarEndereco ).click();
    	}
    
    public void preencheNomeCompleto (String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(nomeCompleto ));
    	driver.findElement( nomeCompleto ).sendKeys(dado);
    	}
    
    public void preencheTelefone (String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(telefone ));
    	driver.findElement( telefone ).sendKeys(dado);
    	}
    
    public void preencheCep (String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(cep ));
    	driver.findElement( cep ).sendKeys(dado);
    	}
    
    public void clicaBtnValidarCep()  {
    	delay(500);
    	driver.findElement( btnValidarCep ).click();
    	driver.findElement( btnValidarCep ).click();
    	}
    
    public void preencheNumero (String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated( numero ) );
    	driver.findElement( numero ).sendKeys(dado);
    	}
    
    public void clicaBtnSalvarEndereco() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnSalvarEndereco ) );
    	driver.findElement( btnSalvarEndereco ).click();
    	}
    
    public void verificarEndereco(String dado) {
    	 String valomensagem = driver.findElement(verificarMensagemSalvo).getText();
    	 Assert.assertEquals( dado, valomensagem );
    }
    
    public void verificarLogou(String dado) {
   	 String valomensagem = driver.findElement(verificarLogou).getText();
   	 Assert.assertEquals( dado, valomensagem );
    }
    
    public void verificarSenhaIncorreta(String dado) {
   	 String valomensagem = driver.findElement(verificarSenhaIncorreta).getText();
     valomensagem.trim();
   	 Assert.assertEquals( dado, valomensagem );
   }
}
