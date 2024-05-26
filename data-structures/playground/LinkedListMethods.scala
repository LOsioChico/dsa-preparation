//> using scala "3.3.1"

@main def main =
  val linkedList = LinkedList(1, LinkedList(2, LinkedList(3, Empty)))
  println(linkedList.map(x => x * 2))

sealed trait LinkedListI:
  def map(fn: Int => Int): LinkedListI

case class LinkedList(head: Int, tail: LinkedListI) extends LinkedListI:
  def map(fn: Int => Int): LinkedListI =
    LinkedList(fn(head), tail.map(fn))

case object Empty extends LinkedListI:
  def map(fn: Int => Int): LinkedListI = Empty
