const { default: $ } = require("webdriverio/build/commands/browser/$")

before(() => {
    console.log("test")
})

describe("Open App & Login", async () => {

    it("Launch App", async () => {
        console.log("Works!!")

        
        driver.activateApp('com.timeless.investments.app')

        let loginBtn = browser.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]")
        loginBtn.click()
        
        browser.closeWindow()
        
        })

    

})