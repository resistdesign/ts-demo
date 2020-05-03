import expect from 'expect.js';
import App from "./index";

export default {
    App: {
        'should be a class': () => {
            expect(App).to.be.a(Function);
        }
    }
};
