import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as http from 'selenium-webdriver/http';
import * as remote from 'selenium-webdriver/remote';
import { ElementHelper, ProtractorBrowser } from './browser';
import { ElementArrayFinder, ElementFinder } from './element';
import { ProtractorExpectedConditions } from './expectedConditions';
import { ProtractorBy } from './locators';
export declare class Ptor {
    browser: ProtractorBrowser;
    $: (search: string) => ElementFinder;
    $$: (search: string) => ElementArrayFinder;
    element: ElementHelper;
    By: ProtractorBy;
    by: ProtractorBy;
    wrapDriver: (webdriver: webdriver.WebDriver, baseUrl?: string, rootElement?: string, untrackOutstandingTimeouts?: boolean) => ProtractorBrowser;
    ExpectedConditions: ProtractorExpectedConditions;
    ProtractorBrowser: any;
    ElementFinder: any;
    ElementArrayFinder: any;
    ProtractorBy: any;
    ProtractorExpectedConditions: any;
    ActionSequence: typeof webdriver.ActionSequence;
    Browser: webdriver.IBrowser;
    Builder: typeof webdriver.Builder;
    Button: webdriver.IButton;
    Capabilities: typeof webdriver.Capabilities;
    Capability: webdriver.ICapability;
    EventEmitter: typeof webdriver.EventEmitter;
    FileDetector: typeof webdriver.FileDetector;
    Key: webdriver.IKey;
    Session: typeof webdriver.Session;
    WebDriver: typeof webdriver.WebDriver;
    WebElement: typeof webdriver.WebElement;
    WebElementPromise: typeof webdriver.WebElementPromise;
    error: typeof webdriver.error;
    logging: typeof webdriver.logging;
    promise: typeof webdriver.promise;
    until: typeof webdriver.until;
    Command: any;
    CommandName: any;
    utils: {
        firefox: typeof firefox;
        http: typeof http;
        remote: typeof remote;
        chrome: typeof chrome;
    };
}
export declare let protractor: Ptor;
