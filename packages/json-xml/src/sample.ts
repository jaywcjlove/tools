export const json = `{
  "any_name": {
    "person": {
      "phone": [
          122233344553,
          122233344554
      ],
      "name": "Boris",
      "age": 34,
      "married": "Yes",
      "birthday": "Mon, 31 Aug 1970 02:03:04 +0300",
      "address": [
          {
              "city": "Moscow",
              "street": "Kahovka",
              "buildingNo": 1,
              "flatNo": 2
          },
          {
              "city": "Tula",
              "street": "Lenina",
              "buildingNo": 3,
              "flatNo": 78
          }
      ]
    }
  }
}`;

export const val = `<any_name>
  <person>
    <phone>+122233344550</phone>
    <name>Jack</name>
    <phone>+122233344551</phone>
    <age>33</age>
    <married firstTime="No">Yes</married>
    <birthday>Wed, 28 Mar 1979 12:13:14 +0300</birthday>
    <address>
      <city>New York</city>
      <street>Park Ave</street>
      <buildingNo>1</buildingNo>
      <flatNo>1</flatNo>
    </address>
    <address>
      <city>Boston</city>
      <street>Centre St</street>
      <buildingNo>33</buildingNo>
      <flatNo>24</flatNo>
    </address>
  </person>
  <person>
    <phone>+122233344553</phone>
    <name>Boris</name>
    <phone>+122233344554</phone>
    <age>34</age>
    <married firstTime="Yes">Yes</married>
    <birthday>Mon, 31 Aug 1970 02:03:04 +0300</birthday>
    <address>
      <city>Moscow</city>
      <street>Kahovka</street>
      <buildingNo>1</buildingNo>
      <flatNo>2</flatNo>
    </address>
    <address>
      <city>Tula</city>
      <street>Lenina</street>
      <buildingNo>3</buildingNo>
      <flatNo>78</flatNo>
    </address>
  </person>
</any_name>`;
