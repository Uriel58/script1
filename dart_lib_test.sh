set -x
set -e
./dart_lib.sh obj
./dart_lib.sh calculus
./dart_lib.sh rnd
./dart_lib.sh vector
./dart_lib.sh file
./dart_lib.sh guid
./dart_run.sh _calllib
# ./dart_run.sh _calllib2
