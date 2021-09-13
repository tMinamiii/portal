package ddgomock

import "fmt"

type Foo interface {
	Bar(x int) int
}

func SUT(f Foo) string {
	return fmt.Sprintln("hogehoge")
}
