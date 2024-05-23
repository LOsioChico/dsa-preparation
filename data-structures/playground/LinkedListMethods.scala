//> using scala "3.3.1"

sealed trait LinkedListI:
  def map(fn: Int => Int): LinkedListI

case class LinkedList(head: Int, tail: LinkedListI) extends LinkedListI:
  def map(fn: Int => Int): LinkedListI =
    LinkedList(fn(head), tail.map(fn))

case object NilO extends LinkedListI:
  def map(fn: Int => Int): LinkedListI = NilO

@main def main =
  val listN = LinkedList(1, LinkedList(2, LinkedList(3, NilO)))
  println(listN.map(x => x * 2))
