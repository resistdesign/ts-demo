import expect from 'expect.js';
import sinon from 'sinon';
import App from "./index";

export default {
    App: {
        'should be a class': () => {
            expect(App).to.be.a(Function);
        },
        'should be able to do stuff': () => {
            const app = new App();

            expect(app.doStuff).to.be.a(Function);
        },
        'should do stuff': () => {
            const message = 'MESSAGE_TEXT';
            const stub = sinon.stub(console, 'log');
            const app = new App();

            app.doStuff(message);

            expect(stub.calledWith(message)).to.be(true);
        }
    }
};
