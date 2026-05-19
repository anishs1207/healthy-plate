import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { time, calories_kcal, protein_g, mealType, skillLevel, cuisine } =
      body;

    let { additionalPrompt } = body;

    if (typeof additionalPrompt === "string" && additionalPrompt.length > 50) {
      additionalPrompt = additionalPrompt.slice(0, 100) + "...";
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const prompt = `<agent-context>
    You are a chef who is experienced in all types of cuisines
    </agent-context>

    <instructions>
    Please take into consideration that the recipe of dish is given with following in mind:
    1. time_to_prepare=${time} minutes
    2. Kcal of the meal=${calories_kcal} kcal
    3. Protein Needs of the meal = ${protein_g} grams
    4. cuisine_type = ${cuisine}
    5. skill level to prepare this recipe = ${skillLevel}
    6. mealType: ${mealType}
    
    AND MAKE sure that this is taken into consideration: ${additionalPrompt}

    Use the above info to prepare the recipe, be strict in following all of these demands

    </instructions>

    <output-format>
    Make sure the recipe you generate is in the form of a json object such as the example given: 

    Example:
    {
    recipeName: "Avocado Toast",
    timeToPrepare: 15,
    description: "A quick, nutritious, and delicious open-faced sandwich with creamy avocado and seasonings.",
    calories: 200,
    protein: 5,
    ingredients: ["2 slices whole grain bread", "1 ripe avocado", "Salt & pepper to taste"],
    mealType: "Lunch",
    steps: [
        "Toast the bread slices until golden brown.",
        "Mash the avocado in a bowl and season with salt and pepper.",
        "Spread the mashed avocado on the toasted bread.",
        "Optionally, top with red chili flakes or a poached egg."
    ],
    skillLevel: "Beginner",
    cuisine: ["American"],
    keywords: ["quick", "healthy", "vegetarian", "avocado", "toast"]
    }

    <constrants-for-recipe>

    1. recipeName: String (Tells the name of the recipe)
    2. timeToPrepare: Integer (in minutes),
    3. description: String (Brief description about the recipe)
    4. calories in kcal & protein in grams
    5. skillLevel: "Beginner" or "Intermediate" or "Advanced"
    6. mealType: "Breakfast" or "Lunch" or "Dinner"
    7. Cuisines: ['Indian'] or ['Mexican'] or ['Italian'] or ['Asian'] or ['Mediterranean'] or ['Middle Eastern'] or ['French'] or ['American'] or ['Caribbean'] or ['Japanese'] or ['Korean'] or ['Thai'] or ['Spanish'] or ['Vietnamese']
    8. keywords: Only 2-3 keywords

    </constrants-for-recipe>

    Only generate in the json format as given above in the exmaple, take into consideration the inputs
    generate as:
    '''json {

    }
    '''
    only give as json object simply

    </output-format>
`;
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    if (!responseText) {
      return NextResponse.json(
        { error: "No response from Gemini API" },
        { status: 500 }
      );
    }

    console.log(responseText);

    let parsed;
    try {
      const cleaned = responseText
        .trim()
        .replace(/^(```json|```|'''json|''')/gi, "")
        .replace(/(```|''')$/gi, "")
        .trim();

      parsed = JSON.parse(cleaned);
    } catch (jsonError) {
      console.error("Failed to parse Gemini JSON:", jsonError);
      return NextResponse.json(
        { error: "Failed to parse recipe JSON from Gemini", raw: responseText },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error generating recipe:", error);
    return NextResponse.json(
      { error: "Failed to generate recipe" },
      { status: 500 }
    );
  }
}
