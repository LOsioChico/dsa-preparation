//> using scala "3.3.1"
import java.util.NoSuchElementException

@main def main = {
  val linkedList = LinkedList(1, 2, 3, 4, 5)
  println(linkedList)
}

sealed trait LinkedListT {
  def head: Int
  def tail: LinkedListT
  def prepend: (num: Int) => LinkedListT
  def append: (num: Int) => LinkedListT
  def map: (fn: Int => Int) => LinkedListT
}

case object LinkedList extends LinkedListT {
  def apply(nums: Int*) =
    nums.foldRight(LinkedList: LinkedListT)((num, acc) => Constructor(num, acc))
  def head = throw new NoSuchElementException("Head of empty linked list")
  def tail = throw new NoSuchElementException("Tail of empty linked list")
  def prepend = (num: Int) => Constructor(num, this)
  def append = (num: Int) => Constructor(num, this)
  def map = (_) => LinkedList
}

case class Constructor(head: Int, tail: LinkedListT) extends LinkedListT {
  def prepend = (num: Int) => Constructor(num, this)
  def append = (num: Int) => Constructor(head, tail.append(num))
  def map = (fn: Int => Int) => Constructor(fn(head), tail.map(fn))
}
