# deno-playground

deno-playground

# protoc

$ brew install automake
$ brew install libtool
$ brew install protobuf

$brew install protobuf@3
$brew link --overwrite protobuf@3

# proto

$ protoc --js_out=import_style=commonjs,binary:. tcp.proto
$ deno run --allow-read --allow-write https://deno.land/x/deno_google_protobuf/tools/build.ts .
