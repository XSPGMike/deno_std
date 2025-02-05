// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.8.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
const common = require('../common');
const zlib = require('zlib');

// Regression test for https://github.com/nodejs/node/issues/30976
// Writes to a stream should finish even after the readable side has been ended.

const data = zlib.deflateRawSync('Welcome');

const inflate = zlib.createInflateRaw();

inflate.resume();
inflate.write(data, common.mustCall());
inflate.write(Buffer.from([0x00]), common.mustCall());
inflate.write(Buffer.from([0x00]), common.mustCall());
inflate.flush(common.mustCall());
