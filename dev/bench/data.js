window.BENCHMARK_DATA = {
  "lastUpdate": 1772196159625,
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
          "id": "b0eec92b1b47c5365d4dde163c15eebee8c0e32d",
          "message": "Optimize with go fix",
          "timestamp": "2026-02-27T09:09:44+08:00",
          "tree_id": "113107c649c08c632a673c944b4347c2f859820b",
          "url": "https://github.com/nothiny/NoKV/commit/b0eec92b1b47c5365d4dde163c15eebee8c0e32d"
        },
        "date": 1772196159022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDBSetSmall",
            "value": 8029,
            "unit": "ns/op\t   3.99 MB/s\t     344 B/op\t      15 allocs/op",
            "extra": "181060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - ns/op",
            "value": 8029,
            "unit": "ns/op",
            "extra": "181060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - MB/s",
            "value": 3.99,
            "unit": "MB/s",
            "extra": "181060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - B/op",
            "value": 344,
            "unit": "B/op",
            "extra": "181060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetSmall - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "181060 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge",
            "value": 16580,
            "unit": "ns/op\t 247.05 MB/s\t     538 B/op\t      23 allocs/op",
            "extra": "69777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - ns/op",
            "value": 16580,
            "unit": "ns/op",
            "extra": "69777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - MB/s",
            "value": 247.05,
            "unit": "MB/s",
            "extra": "69777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - B/op",
            "value": 538,
            "unit": "B/op",
            "extra": "69777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBSetLarge - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "69777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall",
            "value": 8542,
            "unit": "ns/op\t   7.49 MB/s\t   19624 B/op\t       8 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - ns/op",
            "value": 8542,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - MB/s",
            "value": 7.49,
            "unit": "MB/s",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetSmall - B/op",
            "value": 19624,
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
            "value": 12180,
            "unit": "ns/op\t 336.28 MB/s\t   33199 B/op\t      11 allocs/op",
            "extra": "341282 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - ns/op",
            "value": 12180,
            "unit": "ns/op",
            "extra": "341282 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - MB/s",
            "value": 336.28,
            "unit": "MB/s",
            "extra": "341282 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - B/op",
            "value": 33199,
            "unit": "B/op",
            "extra": "341282 times\n4 procs"
          },
          {
            "name": "BenchmarkDBGetLarge - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "341282 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet",
            "value": 125437,
            "unit": "ns/op\t 130.62 MB/s\t   56848 B/op\t     659 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - ns/op",
            "value": 125437,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDBBatchSet - MB/s",
            "value": 130.62,
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
            "value": 1507983,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - ns/op",
            "value": 1507983,
            "unit": "ns/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorScan - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "780 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek",
            "value": 620.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1927390 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - ns/op",
            "value": 620.3,
            "unit": "ns/op",
            "extra": "1927390 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1927390 times\n4 procs"
          },
          {
            "name": "BenchmarkDBIteratorSeek - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1927390 times\n4 procs"
          },
          {
            "name": "BenchmarkTouch",
            "value": 23.82,
            "unit": "ns/op",
            "extra": "50389431 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchParallel",
            "value": 60.55,
            "unit": "ns/op",
            "extra": "20286264 times\n4 procs"
          },
          {
            "name": "BenchmarkTouchAndClamp",
            "value": 19.97,
            "unit": "ns/op",
            "extra": "58609827 times\n4 procs"
          },
          {
            "name": "BenchmarkFrequency",
            "value": 16.94,
            "unit": "ns/op",
            "extra": "70953889 times\n4 procs"
          },
          {
            "name": "BenchmarkTopN",
            "value": 21777279,
            "unit": "ns/op",
            "extra": "57 times\n4 procs"
          },
          {
            "name": "BenchmarkSlidingWindow",
            "value": 75.47,
            "unit": "ns/op",
            "extra": "15957342 times\n4 procs"
          },
          {
            "name": "BenchmarkDecay",
            "value": 50579,
            "unit": "ns/op",
            "extra": "22676 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch",
            "value": 49531,
            "unit": "ns/op\t 165.39 MB/s\t   27804 B/op\t     454 allocs/op",
            "extra": "25014 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - ns/op",
            "value": 49531,
            "unit": "ns/op",
            "extra": "25014 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - MB/s",
            "value": 165.39,
            "unit": "MB/s",
            "extra": "25014 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - B/op",
            "value": 27804,
            "unit": "B/op",
            "extra": "25014 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMSetBatch - allocs/op",
            "value": 454,
            "unit": "allocs/op",
            "extra": "25014 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush",
            "value": 6525284,
            "unit": "ns/op\t67523161 B/op\t    2579 allocs/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - ns/op",
            "value": 6525284,
            "unit": "ns/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - B/op",
            "value": 67523161,
            "unit": "B/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkLSMRotateFlush - allocs/op",
            "value": 2579,
            "unit": "allocs/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries",
            "value": 28477,
            "unit": "ns/op\t 287.67 MB/s\t    1794 B/op\t      35 allocs/op",
            "extra": "70471 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - ns/op",
            "value": 28477,
            "unit": "ns/op",
            "extra": "70471 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - MB/s",
            "value": 287.67,
            "unit": "MB/s",
            "extra": "70471 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - B/op",
            "value": 1794,
            "unit": "B/op",
            "extra": "70471 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogAppendEntries - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "70471 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue",
            "value": 204.9,
            "unit": "ns/op\t1249.27 MB/s\t     272 B/op\t       2 allocs/op",
            "extra": "5895177 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - ns/op",
            "value": 204.9,
            "unit": "ns/op",
            "extra": "5895177 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - MB/s",
            "value": 1249.27,
            "unit": "MB/s",
            "extra": "5895177 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - B/op",
            "value": 272,
            "unit": "B/op",
            "extra": "5895177 times\n4 procs"
          },
          {
            "name": "BenchmarkVLogReadValue - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5895177 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend",
            "value": 690.2,
            "unit": "ns/op\t 370.93 MB/s\t      36 B/op\t       5 allocs/op",
            "extra": "3450601 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - ns/op",
            "value": 690.2,
            "unit": "ns/op",
            "extra": "3450601 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - MB/s",
            "value": 370.93,
            "unit": "MB/s",
            "extra": "3450601 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "3450601 times\n4 procs"
          },
          {
            "name": "BenchmarkWALAppend - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3450601 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay",
            "value": 1989955,
            "unit": "ns/op\t 3064021 B/op\t   40017 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - ns/op",
            "value": 1989955,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - B/op",
            "value": 3064021,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkWALReplay - allocs/op",
            "value": 40017,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
          }
        ]
      }
    ]
  }
}