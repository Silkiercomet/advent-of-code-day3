import "./styles.css";

/*
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

part 2

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.
*/
// x lose, y draw, z win
const func = () => {
  // second part solucion
  const inputValue = document.getElementById("value");
  const compartments = inputValue.value
    .trim()
    .split("\n")
    .map((e) => {
      let trimedArr = e.trim().split("");
      return trimedArr;
    });
  let num = 0,
    chunkSize = 3,
    groups = [];

  for (let i = 0; i < compartments.length; i += chunkSize) {
    const chunk = compartments.slice(i, i + chunkSize);
    groups.push(chunk);
  }
  function findCommonElements3(arr1, arr2, arr3) {
    return arr1.some((item) => {
      if (arr2.includes(item) && arr3.includes(item)) {
        return (num += item);
      }
      return 0;
    });
  }
  groups.map((e) => {
    let formatedCompartments = e.map((e) => {
      return e.map((item) => {
        const upperCaseItem = item.toUpperCase();
        if (item === upperCaseItem) {
          return item.charCodeAt(0) - 38;
        }
        return item.charCodeAt(0) - 96;
      });
    });

    findCommonElements3(
      formatedCompartments[0],
      formatedCompartments[1],
      formatedCompartments[2]
    );
    return formatedCompartments;
  });

  return num;
};

console.log(func());

//first part solution
const func2 = () => {
  const inputValue = document.getElementById("value");
  const compartments = inputValue.value
    .trim()
    .split("\n")
    .map((e) => {
      let trimedArr = e.trim().split("");
      let halfOfTheArr = trimedArr.length / 2;
      return [trimedArr.slice(0, halfOfTheArr), trimedArr.slice(halfOfTheArr)];
    });
  let num = 0;
  compartments.map((e) => {
    function findCommonElements3(arr1, arr2) {
      return arr1.some((item) => {
        if (arr2.includes(item)) {
          return (num += item);
        }
        return 0;
      });
    }

    let formatedCompartments = e.map((e) => {
      return e.map((item) => {
        const upperCaseItem = item.toUpperCase();
        if (item === upperCaseItem) {
          return item.charCodeAt(0) - 38;
        }
        return item.charCodeAt(0) - 96;
      });
    });
    return findCommonElements3(
      formatedCompartments[0],
      formatedCompartments[1]
    );
  });
  return num;
};
console.log(func2());
