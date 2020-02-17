package br.com.desafio.cadastro.previsaotempo.incluir;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ManterPrevisaoTempoPageObjects {
	private static final int DEFAULT_SLEEP_TIMEOUT = 30;
	private static WebDriver driver;
	private static WebDriverWait wait;
	private static final By barraPesquisaGoogle = By.xpath( ".//*[@name='q']");
    private static final By probabilidadeChuvaGoogle = By.xpath( ".//*[@id='wob_pp']");
    private static final By	umidadeGoogle = By.xpath( ".//*[@id='wob_hm']");
    private static final By btnPesquisaGoogle = By.xpath("//*[@name='btnK']");
    private static final By btnPesquisaCidade = By.xpath( ".//*[@class='-white _none-sm actControlModal']");
    private static final By barraPesquisaClimaTempo = By.xpath(".//*[@id='searchGeneral']");
    private static final By	probabilidadeChuvaClimaTempo = By.xpath("//*[@id='wrapperForecastCard1']/div[2]/div/div[1]/div[2]/ul[3]/li[1]/p']");
    private static final By umidademinimaClima = By.xpath("//*[@id='wrapperForecastCard1']/div[2]/div/div[1]/div[2]/ul[2]/li[3]/p/text()']");
    private static final By umidadeMaximaClima = By.xpath ("//*[@id='wrapperForecastCard1']/div[2]/div/div[1]/div[2]/ul[3]/li[3]/p/text()']");
    public String valorProbabilidadeGoogle;
    public String valorUmidadeGoogle;
    public String valorProbabilidadeClimaTempo;
    public String valorUmidadeMinima;
    public String valorUmidadeMaxima;
    
    public ManterPrevisaoTempoPageObjects() {
        System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
	    options.addArguments( "--disable-infobars" );
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
    
    public void acessarPaginaGoogle() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get( "https://www.google.com.br");
     }
    
    public void acessarPaginaClimaTempo() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
   	    driver.manage().window().maximize();
        driver.get( "https://www.climatempo.com.br");
     }
    
    public String getValorProbabilidadeGoogle() {
    	return valorProbabilidadeGoogle;
    }
    
    public String getValorProbabilidadeClimaTempo() {
    	return valorProbabilidadeClimaTempo;
    }
        
    public String getValorUmidadeGoogle() {
    	return valorUmidadeGoogle;
    }
    
    public String getValorUmidadeMinima() {
    	return valorUmidadeMinima;
    }
    
    public String getValorUmidadeMaxima() {
    	return valorUmidadeMaxima;
    }
    
    public void preencheBarraPesquisaGoogle(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(barraPesquisaGoogle));
    	driver.findElement( barraPesquisaGoogle ).sendKeys(dado);
    	}
    
    public void clicaBtnPesquisaGoogle() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnPesquisaGoogle ) );
    	driver.findElement( btnPesquisaGoogle ).click();
    	}
    
    public void getValorProbabilidadeGoogle(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(probabilidadeChuvaGoogle));
    	valorProbabilidadeGoogle = driver.findElement(probabilidadeChuvaGoogle).getText();
    	}

    public void getValorUmidadeeGoogle(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(umidadeGoogle));
    	valorProbabilidadeGoogle = driver.findElement(umidadeGoogle).getText();
    	}
    
    public void clicaBtnPesquisaCidade() {
    	wait.until( ExpectedConditions.elementToBeClickable( btnPesquisaCidade ) );
    	driver.findElement( btnPesquisaCidade ).click();
    	}
    
    public void preencheBarraPesquisaClimaTempo(String dado) {
    	delay(500);
    	wait.until( ExpectedConditions.presenceOfElementLocated(barraPesquisaClimaTempo));
    	driver.findElement( barraPesquisaClimaTempo ).sendKeys(dado);
    	delay(500);
    	driver.findElement(barraPesquisaClimaTempo).sendKeys(Keys.ENTER);
    	}
    
    public void getValorProbabilidadeChuvaClimaTempo() {
    	wait.until( ExpectedConditions.presenceOfElementLocated(probabilidadeChuvaClimaTempo));
    	valorProbabilidadeClimaTempo = driver.findElement(probabilidadeChuvaClimaTempo).getText();
    	}
    
    public void getValorUmidadeMinima(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(umidademinimaClima));
    	valorUmidadeMinima = driver.findElement(umidademinimaClima).getText();
    	}
    
    public void getValorUmidadeMaxima(String dado) {
    	wait.until( ExpectedConditions.presenceOfElementLocated(umidadeMaximaClima));
    	valorUmidadeMaxima = driver.findElement(umidadeMaximaClima).getText();
    	}
}