window.BENCHMARK_DATA = {
  "lastUpdate": 1772610086863,
  "repoUrl": "https://github.com/nothiny/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "songguocheng348@gmail.com",
            "name": "feichai0017",
            "username": "feichai0017"
          },
          "committer": {
            "email": "songguocheng348@gmail.com",
            "name": "feichai0017",
            "username": "feichai0017"
          },
          "distinct": true,
          "id": "e3efa6fca30ef5ab77d24fbd8c3f2d2e70d1075a",
          "message": "fix: balance vlog gc safety with rewrite progress",
          "timestamp": "2026-03-04T13:13:36+11:00",
          "tree_id": "e24a8e531996e27aad7fcc4812fb04671293feff",
          "url": "https://github.com/nothiny/NoKV/commit/e3efa6fca30ef5ab77d24fbd8c3f2d2e70d1075a"
        },
        "date": 1772610085612,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV)",
            "value": 8277,
            "unit": "ns/op\t   3.87 MB/s\t     584 B/op\t      18 allocs/op",
            "extra": "155270 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV) - ns/op",
            "value": 8277,
            "unit": "ns/op",
            "extra": "155270 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV) - MB/s",
            "value": 3.87,
            "unit": "MB/s",
            "extra": "155270 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV) - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "155270 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall (github.com/feichai0017/NoKV) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "155270 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV)",
            "value": 13363,
            "unit": "ns/op\t 306.51 MB/s\t     649 B/op\t      25 allocs/op",
            "extra": "125325 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV) - ns/op",
            "value": 13363,
            "unit": "ns/op",
            "extra": "125325 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV) - MB/s",
            "value": 306.51,
            "unit": "MB/s",
            "extra": "125325 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV) - B/op",
            "value": 649,
            "unit": "B/op",
            "extra": "125325 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge (github.com/feichai0017/NoKV) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "125325 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV)",
            "value": 6933,
            "unit": "ns/op\t   9.23 MB/s\t   16789 B/op\t       7 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV) - ns/op",
            "value": 6933,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV) - MB/s",
            "value": 9.23,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV) - B/op",
            "value": 16789,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall (github.com/feichai0017/NoKV) - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV)",
            "value": 9178,
            "unit": "ns/op\t 446.28 MB/s\t   27129 B/op\t      11 allocs/op",
            "extra": "273428 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV) - ns/op",
            "value": 9178,
            "unit": "ns/op",
            "extra": "273428 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV) - MB/s",
            "value": 446.28,
            "unit": "MB/s",
            "extra": "273428 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV) - B/op",
            "value": 27129,
            "unit": "B/op",
            "extra": "273428 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge (github.com/feichai0017/NoKV) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "273428 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet (github.com/feichai0017/NoKV)",
            "value": 122288,
            "unit": "ns/op\t 133.98 MB/s\t   92307 B/op\t     353 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet (github.com/feichai0017/NoKV) - ns/op",
            "value": 122288,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet (github.com/feichai0017/NoKV) - MB/s",
            "value": 133.98,
            "unit": "MB/s",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet (github.com/feichai0017/NoKV) - B/op",
            "value": 92307,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet (github.com/feichai0017/NoKV) - allocs/op",
            "value": 353,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV)",
            "value": 1626372,
            "unit": "ns/op\t       4 B/op\t       0 allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV) - ns/op",
            "value": 1626372,
            "unit": "ns/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV) - B/op",
            "value": 4,
            "unit": "B/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan (github.com/feichai0017/NoKV) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV)",
            "value": 575.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "2118595 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV) - ns/op",
            "value": 575.1,
            "unit": "ns/op",
            "extra": "2118595 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "2118595 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek (github.com/feichai0017/NoKV) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2118595 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch (github.com/feichai0017/NoKV/hotring)",
            "value": 31,
            "unit": "ns/op",
            "extra": "38699300 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel (github.com/feichai0017/NoKV/hotring)",
            "value": 85.16,
            "unit": "ns/op",
            "extra": "14734008 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp (github.com/feichai0017/NoKV/hotring)",
            "value": 23.81,
            "unit": "ns/op",
            "extra": "50404690 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency (github.com/feichai0017/NoKV/hotring)",
            "value": 14.12,
            "unit": "ns/op",
            "extra": "84964509 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN (github.com/feichai0017/NoKV/hotring)",
            "value": 20206431,
            "unit": "ns/op",
            "extra": "58 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow (github.com/feichai0017/NoKV/hotring)",
            "value": 82.74,
            "unit": "ns/op",
            "extra": "14530592 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay (github.com/feichai0017/NoKV/hotring)",
            "value": 67871,
            "unit": "ns/op",
            "extra": "18165 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch (github.com/feichai0017/NoKV/lsm)",
            "value": 40316,
            "unit": "ns/op\t 203.19 MB/s\t   43504 B/op\t     210 allocs/op",
            "extra": "30428 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch (github.com/feichai0017/NoKV/lsm) - ns/op",
            "value": 40316,
            "unit": "ns/op",
            "extra": "30428 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch (github.com/feichai0017/NoKV/lsm) - MB/s",
            "value": 203.19,
            "unit": "MB/s",
            "extra": "30428 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch (github.com/feichai0017/NoKV/lsm) - B/op",
            "value": 43504,
            "unit": "B/op",
            "extra": "30428 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch (github.com/feichai0017/NoKV/lsm) - allocs/op",
            "value": 210,
            "unit": "allocs/op",
            "extra": "30428 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush (github.com/feichai0017/NoKV/lsm)",
            "value": 11859310,
            "unit": "ns/op\t67678753 B/op\t    1542 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush (github.com/feichai0017/NoKV/lsm) - ns/op",
            "value": 11859310,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush (github.com/feichai0017/NoKV/lsm) - B/op",
            "value": 67678753,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush (github.com/feichai0017/NoKV/lsm) - allocs/op",
            "value": 1542,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/utils)",
            "value": null,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "0 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/utils) - ns/op",
            "value": null,
            "unit": "ns/op",
            "extra": "0 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/utils) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "0 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert (github.com/feichai0017/NoKV/utils) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "0 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries (github.com/feichai0017/NoKV/vlog)",
            "value": 22792,
            "unit": "ns/op\t 359.42 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "102769 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries (github.com/feichai0017/NoKV/vlog) - ns/op",
            "value": 22792,
            "unit": "ns/op",
            "extra": "102769 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries (github.com/feichai0017/NoKV/vlog) - MB/s",
            "value": 359.42,
            "unit": "MB/s",
            "extra": "102769 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries (github.com/feichai0017/NoKV/vlog) - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "102769 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries (github.com/feichai0017/NoKV/vlog) - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "102769 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue (github.com/feichai0017/NoKV/vlog)",
            "value": 159.2,
            "unit": "ns/op\t1608.09 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "7453975 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue (github.com/feichai0017/NoKV/vlog) - ns/op",
            "value": 159.2,
            "unit": "ns/op",
            "extra": "7453975 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue (github.com/feichai0017/NoKV/vlog) - MB/s",
            "value": 1608.09,
            "unit": "MB/s",
            "extra": "7453975 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue (github.com/feichai0017/NoKV/vlog) - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "7453975 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue (github.com/feichai0017/NoKV/vlog) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7453975 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/wal)",
            "value": 1011,
            "unit": "ns/op\t 253.14 MB/s\t     440 B/op\t       9 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/wal) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/wal) - MB/s",
            "value": 253.14,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/wal) - B/op",
            "value": 440,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend (github.com/feichai0017/NoKV/wal) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/wal)",
            "value": 2146858,
            "unit": "ns/op\t 3544160 B/op\t   40018 allocs/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/wal) - ns/op",
            "value": 2146858,
            "unit": "ns/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/wal) - B/op",
            "value": 3544160,
            "unit": "B/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay (github.com/feichai0017/NoKV/wal) - allocs/op",
            "value": 40018,
            "unit": "allocs/op",
            "extra": "559 times\n4 procs"
          }
        ]
      }
    ]
  }
}