import { useRouter } from "next/navigation";
import { validateZipCode } from "../../utility/validateZipCode";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export function handleSubmit(zipCode: string | null, router: AppRouterInstance) {
  try {
    if (zipCode == null || !validateZipCode(zipCode)) {
      alert("The zip code was either not provided or invalid");
      return null;
    }

    router.push(`/displayPage?zipCode=${zipCode}`);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
