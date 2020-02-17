package br.com.desafio.cadastro.amazon.incluir;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith( Cucumber.class )

@CucumberOptions( features = "src\\test\\resources\\features\\bdddesafio\\amazon", tags = "@incluir", plugin = {
                "pretty",
                "html:target/selenium/cucumber/amazon" } )
public class RunCucumber {

}