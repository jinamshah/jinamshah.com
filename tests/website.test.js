const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Test HTML file exists and has basic structure
test('index.html exists', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  assert.ok(fs.existsSync(indexPath), 'index.html should exist');
});

test('index.html has valid doctype', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.startsWith('<!DOCTYPE html>'), 'Should have valid DOCTYPE');
});

test('index.html has lang attribute', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('<html lang="en"'), 'Should have lang attribute');
});

test('index.html has title', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('<title>Jinam Shah</title>'), 'Should have correct title');
});

test('index.html contains email link', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('mailto:hi@jinamshah.com'), 'Should have correct email link');
});

test('index.html has contact section', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('data-anchor="contact"'), 'Should have contact section');
});

test('index.html has about section', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('data-anchor="skills"'), 'Should have about/skills section');
});

test('index.html has projects section', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('data-anchor="projects"'), 'Should have projects section');
});

test('index.html references style.css', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('href="./style.css"'), 'Should reference style.css');
});

test('index.html references script.js', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('src="./script.js"'), 'Should reference script.js');
});

test('style.css exists', () => {
  const cssPath = path.join(__dirname, '..', 'style.css');
  assert.ok(fs.existsSync(cssPath), 'style.css should exist');
});

test('script.js exists', () => {
  const jsPath = path.join(__dirname, '..', 'script.js');
  assert.ok(fs.existsSync(jsPath), 'script.js should exist');
});

test('github_activity.js exists', () => {
  const jsPath = path.join(__dirname, '..', 'github_activity.js');
  assert.ok(fs.existsSync(jsPath), 'github_activity.js should exist');
});

test('favicon.ico exists', () => {
  const faviconPath = path.join(__dirname, '..', 'favicon.ico');
  assert.ok(fs.existsSync(faviconPath), 'favicon.ico should exist');
});

test('CNAME exists', () => {
  const cnamePath = path.join(__dirname, '..', 'CNAME');
  assert.ok(fs.existsSync(cnamePath), 'CNAME should exist');
});

test('CNAME has correct domain', () => {
  const cnamePath = path.join(__dirname, '..', 'CNAME');
  const content = fs.readFileSync(cnamePath, 'utf8').trim();
  assert.equal(content, 'jinamshah.com', 'CNAME should have correct domain');
});

test('resume.pdf exists', () => {
  const resumePath = path.join(__dirname, '..', 'resume.pdf');
  assert.ok(fs.existsSync(resumePath), 'resume.pdf should exist');
});

test('index.html has GitHub link', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('github.com/jinamshah'), 'Should have GitHub link');
});

test('index.html has LinkedIn link', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('linkedin.com/in/jinamshah'), 'Should have LinkedIn link');
});

test('index.html has viewport meta tag', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('viewport'), 'Should have viewport meta tag');
});

test('index.html has charset meta tag', () => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  assert.ok(content.includes('charset="UTF-8"'), 'Should have charset meta tag');
});

test('style.css is not empty', () => {
  const cssPath = path.join(__dirname, '..', 'style.css');
  const content = fs.readFileSync(cssPath, 'utf8');
  assert.ok(content.length > 100, 'style.css should have content');
});

test('script.js is not empty', () => {
  const jsPath = path.join(__dirname, '..', 'script.js');
  const content = fs.readFileSync(jsPath, 'utf8');
  assert.ok(content.length > 100, 'script.js should have content');
});