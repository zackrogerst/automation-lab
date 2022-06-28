const { By } = require('selenium-webdriver');


const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Tron 1982\n');
    const movie = await driver.findElement(By.xpath('//li'));
    const displayed = movie.isDisplayed();
    expect(displayed).toBeTruthy();
}

const watchMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click();
    const checkedMovie = await driver.findElement(By.className('checked'));
    const displayed = checkedMovie.isDisplayed();
    expect(displayed).toBeTruthy();
}

const deleteMovie = async (driver) => {
    const deletedMovie = await driver.findElement(By.id('Tron1982')).click();
    expect(deletedMovie).toBe(null);
}

module.exports = {
    addMovie,
    watchMovie,
    deleteMovie,
}