window.BENCHMARK_DATA = {
  "lastUpdate": 1771905486795,
  "repoUrl": "https://github.com/nothiny/NoKV",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "songguocheng348@gmail.com",
            "name": "eric_song",
            "username": "feichai0017"
          },
          "committer": {
            "email": "songguocheng348@gmail.com",
            "name": "eric_song",
            "username": "feichai0017"
          },
          "distinct": true,
          "id": "e6d4c0e64bafea415aaea5c8fc0118ef6fc80d34",
          "message": "docs: align docs with current benchmark and code reality",
          "timestamp": "2026-02-23T20:32:28+08:00",
          "tree_id": "66490998e5e1241f858db894d832ed5ebc826e35",
          "url": "https://github.com/nothiny/NoKV/commit/e6d4c0e64bafea415aaea5c8fc0118ef6fc80d34"
        },
        "date": 1771905485975,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall",
            "value": 8050,
            "unit": "ns/op\t   3.98 MB/s\t     344 B/op\t      15 allocs/op",
            "extra": "156321 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - ns/op",
            "value": 8050,
            "unit": "ns/op",
            "extra": "156321 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - MB/s",
            "value": 3.98,
            "unit": "MB/s",
            "extra": "156321 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "156321 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "156321 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge",
            "value": 16411,
            "unit": "ns/op\t 249.59 MB/s\t     538 B/op\t      23 allocs/op",
            "extra": "67425 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - ns/op",
            "value": 16411,
            "unit": "ns/op",
            "extra": "67425 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - MB/s",
            "value": 249.59,
            "unit": "MB/s",
            "extra": "67425 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - B/op",
            "value": 538,
            "unit": "B/op",
            "extra": "67425 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "67425 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall",
            "value": 10226,
            "unit": "ns/op\t   6.26 MB/s\t   23551 B/op\t       8 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - ns/op",
            "value": 10226,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - MB/s",
            "value": 6.26,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - B/op",
            "value": 23551,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge",
            "value": 12364,
            "unit": "ns/op\t 331.27 MB/s\t   33621 B/op\t      11 allocs/op",
            "extra": "316449 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - ns/op",
            "value": 12364,
            "unit": "ns/op",
            "extra": "316449 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - MB/s",
            "value": 331.27,
            "unit": "MB/s",
            "extra": "316449 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - B/op",
            "value": 33621,
            "unit": "B/op",
            "extra": "316449 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "316449 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet",
            "value": 128095,
            "unit": "ns/op\t 127.91 MB/s\t   56848 B/op\t     659 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - ns/op",
            "value": 128095,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - MB/s",
            "value": 127.91,
            "unit": "MB/s",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - B/op",
            "value": 56848,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - allocs/op",
            "value": 659,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan",
            "value": 1559393,
            "unit": "ns/op\t       3 B/op\t       0 allocs/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - ns/op",
            "value": 1559393,
            "unit": "ns/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - B/op",
            "value": 3,
            "unit": "B/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "772 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek",
            "value": 593.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "2025853 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - ns/op",
            "value": 593.2,
            "unit": "ns/op",
            "extra": "2025853 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "2025853 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2025853 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch",
            "value": 50794,
            "unit": "ns/op\t 161.28 MB/s\t   27706 B/op\t     454 allocs/op",
            "extra": "25244 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - ns/op",
            "value": 50794,
            "unit": "ns/op",
            "extra": "25244 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - MB/s",
            "value": 161.28,
            "unit": "MB/s",
            "extra": "25244 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - B/op",
            "value": 27706,
            "unit": "B/op",
            "extra": "25244 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "25244 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush",
            "value": 6729542,
            "unit": "ns/op\t67523185 B/op\t    2579 allocs/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - ns/op",
            "value": 6729542,
            "unit": "ns/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - B/op",
            "value": 67523185,
            "unit": "B/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - allocs/op",
            "value": 2579,
            "unit": "allocs/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert",
            "value": 608.5,
            "unit": "ns/op\t 105.17 MB/s\t    1544 B/op\t       0 allocs/op",
            "extra": "1863193 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - ns/op",
            "value": 608.5,
            "unit": "ns/op",
            "extra": "1863193 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - MB/s",
            "value": 105.17,
            "unit": "MB/s",
            "extra": "1863193 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - B/op",
            "value": 1544,
            "unit": "B/op",
            "extra": "1863193 times\n4 procs"
          },
          {
            "name": "BenchmarkARTInsert - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1863193 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet",
            "value": 129.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9355920 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - ns/op",
            "value": 129.5,
            "unit": "ns/op",
            "extra": "9355920 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9355920 times\n4 procs"
          },
          {
            "name": "BenchmarkARTGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9355920 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert",
            "value": 1456,
            "unit": "ns/op\t  43.96 MB/s\t     162 B/op\t       1 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - ns/op",
            "value": 1456,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - MB/s",
            "value": 43.96,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - B/op",
            "value": 162,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistInsert - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet",
            "value": 479.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2452488 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - ns/op",
            "value": 479.3,
            "unit": "ns/op",
            "extra": "2452488 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2452488 times\n4 procs"
          },
          {
            "name": "BenchmarkSkiplistGet - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2452488 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries",
            "value": 25699,
            "unit": "ns/op\t 318.77 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "77114 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - ns/op",
            "value": 25699,
            "unit": "ns/op",
            "extra": "77114 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - MB/s",
            "value": 318.77,
            "unit": "MB/s",
            "extra": "77114 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "77114 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "77114 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue",
            "value": 166.9,
            "unit": "ns/op\t1534.17 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "7250112 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - ns/op",
            "value": 166.9,
            "unit": "ns/op",
            "extra": "7250112 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - MB/s",
            "value": 1534.17,
            "unit": "MB/s",
            "extra": "7250112 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "7250112 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7250112 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend",
            "value": 702.1,
            "unit": "ns/op\t 364.64 MB/s\t      36 B/op\t       5 allocs/op",
            "extra": "3388459 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - ns/op",
            "value": 702.1,
            "unit": "ns/op",
            "extra": "3388459 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - MB/s",
            "value": 364.64,
            "unit": "MB/s",
            "extra": "3388459 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "3388459 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3388459 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay",
            "value": 1988340,
            "unit": "ns/op\t 3064035 B/op\t   40018 allocs/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - ns/op",
            "value": 1988340,
            "unit": "ns/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - B/op",
            "value": 3064035,
            "unit": "B/op",
            "extra": "606 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - allocs/op",
            "value": 40018,
            "unit": "allocs/op",
            "extra": "606 times\n4 procs"
          }
        ]
      }
    ]
  }
}