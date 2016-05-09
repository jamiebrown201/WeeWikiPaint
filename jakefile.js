task("default", [], function() {
   console.log("default");
});

desc("Example!");
task("example", ["dependency"], function() {
    console.log("Example task");
});

task("dependency", function() {
    console.log("Dependency");
});